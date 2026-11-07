/**
 * @jest-environment node
 */
import fs from "fs";
import path from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import ts from "typescript";

const WEB_DIR = path.join(__dirname, "../..");
const SOURCE_DIRS = ["components", "front_end"];
const CLASS_PROPS = new Set(["className", "classes", "inputFieldClassName"]);
// Defined by stylesheets loaded outside styles.css
const EXTERNAL_CLASSES = new Set(["material-icons"]);

const listTsxFiles = (dir: string): string[] =>
    fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            return entry.name === "__tests__" ? [] : listTsxFiles(fullPath);
        }
        return entry.name.endsWith(".tsx") ? [fullPath] : [];
    });

// Template interpolations are replaced with a marker so partial names like `s${size}`
// are dropped instead of reported as `s`.
const INTERPOLATION = "\u0000";

const collectStrings = (node: ts.Node, out: string[]) => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        out.push(node.text);
    } else if (ts.isTemplateExpression(node)) {
        out.push(node.head.text + node.templateSpans
            .map((span) => INTERPOLATION + span.literal.text)
            .join(""));
        node.templateSpans.forEach((span) => collectStrings(span.expression, out));
    } else {
        ts.forEachChild(node, (child) => collectStrings(child, out));
    }
};

const usedClasses = (file: string): string[] => {
    const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"),
        ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const strings: string[] = [];
    const visit = (node: ts.Node) => {
        if (ts.isJsxAttribute(node) && CLASS_PROPS.has(node.name.getText()) && node.initializer) {
            collectStrings(node.initializer, strings);
        }
        ts.forEachChild(node, visit);
    };
    visit(source);
    return strings
        .flatMap((s) => s.split(/\s+/))
        .filter((name) => name && !name.includes(INTERPOLATION));
};

const definedClasses = (css: string): Set<string> => new Set(
    [...css.matchAll(/\.((?:\\.|[\w-])+)/g)].map(([, name]) => name.replace(/\\(.)/g, "$1")));

test("every class used in a component is defined by the compiled stylesheet", async () => {
    const stylesPath = path.join(WEB_DIR, "front_end/styles.css");
    const {css} = await postcss([tailwindcss(path.join(WEB_DIR, "tailwind.config.js"))])
        .process(fs.readFileSync(stylesPath, "utf8"), {from: stylesPath});
    const defined = definedClasses(css);

    const undefinedUses = SOURCE_DIRS
        .flatMap((dir) => listTsxFiles(path.join(WEB_DIR, dir)))
        .flatMap((file) => usedClasses(file)
            .filter((name) => !defined.has(name) && !EXTERNAL_CLASSES.has(name))
            .map((name) => `${name} (${path.relative(WEB_DIR, file)})`));

    expect([...new Set(undefinedUses)].sort()).toEqual([]);
});
