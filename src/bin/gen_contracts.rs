extern crate typescript_definitions;
extern crate vinoteca;

use vinoteca::models::*;

use std::fs::File;
use std::io::{BufWriter, Write};
use std::path::Path;
use typescript_definitions::TypeScriptifyTrait;

#[allow(unused)]
fn main() {
    if cfg!(any(debug_assertions, feature="export-typescript")) {
        // Truncate file if it already existopens
        let file = File::create(Path::new(env!("CARGO_MANIFEST_DIR")).join("vinoteca/lib/RestTypes.d.ts")).expect("Couldn't open TypeScript contracts file");
        let mut writer = BufWriter::new(&file);
        write!(&mut writer, "{}", Color::type_script_ify());
        write!(&mut writer, "{}", ColorForm::type_script_ify());
        write!(&mut writer, "{}", Grape::type_script_ify());
        write!(&mut writer, "{}", GrapeForm::type_script_ify());
        write!(&mut writer, "{}", Producer::type_script_ify());
        write!(&mut writer, "{}", ProducerForm::type_script_ify());
        write!(&mut writer, "{}", Purchase::type_script_ify());
        write!(&mut writer, "{}", PurchaseForm::type_script_ify());
        write!(&mut writer, "{}", Region::type_script_ify());
        write!(&mut writer, "{}", RegionForm::type_script_ify());
        write!(&mut writer, "{}", Store::type_script_ify());
        write!(&mut writer, "{}", VitiArea::type_script_ify());
        write!(&mut writer, "{}", VitiAreaForm::type_script_ify());
        write!(&mut writer, "{}", WineType::type_script_ify());
        write!(&mut writer, "{}", WineTypeForm::type_script_ify());
        write!(&mut writer, "{}", WineGrape::type_script_ify());
        write!(&mut writer, "{}", Wine::type_script_ify());
    };
}
