import { nameToId } from "lib/component_utils";
import React from "react";
import { IGridProps } from "../Grid";
import { TextInput } from "./TextInput";

interface IAutocompleteProps extends IGridProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    /** Suggestion text mapped to an icon URL, or null for no icon. */
    completions: Record<string, string | null>;
    required?: boolean;
    enabled?: boolean;
    id?: string;
}

const MAX_SUGGESTIONS = 10;

const filterCompletions = (completions: Record<string, string | null>, value: string) => {
    const needle = value.toLowerCase();
    return Object.keys(completions)
        .filter((option) => option.toLowerCase().includes(needle))
        .slice(0, MAX_SUGGESTIONS);
};

/**
 * Free-text input with a suggestion list. The typed text is always the value;
 * a suggestion replaces it only when the user clicks it or highlights it with
 * the arrow keys and then presses Enter or Tab.
 */
export const Autocomplete: React.FC<IAutocompleteProps> = ({
    name, value, onChange, completions, required, enabled, id, ...grid
}) => {
    const listId = `${id ?? nameToId(name)}-suggestions`;
    const optionId = (index: number) => `${listId}-${index}`;
    const [isOpen, setIsOpen] = React.useState(false);
    const [highlighted, setHighlighted] = React.useState<number | null>(null);

    const suggestions = filterCompletions(completions, value);
    const isListVisible = isOpen && suggestions.length > 0;
    const highlightedIndex = isListVisible && highlighted !== null
        && highlighted < suggestions.length
        ? highlighted
        : null;
    const highlightedSuggestion = highlightedIndex === null ? null : suggestions[highlightedIndex];

    const close = () => {
        setIsOpen(false);
        setHighlighted(null);
    };

    const select = (suggestion: string) => {
        onChange(suggestion);
        close();
    };

    const onTextChange = (text: string) => {
        onChange(text);
        setIsOpen(true);
        setHighlighted(null);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                if (suggestions.length === 0) {
                    return;
                }
                setIsOpen(true);
                setHighlighted(highlighted === null
                    ? 0
                    : Math.min(highlighted + 1, suggestions.length - 1));
                return;
            case "ArrowUp":
                e.preventDefault();
                if (highlighted !== null) {
                    setHighlighted(Math.max(highlighted - 1, 0));
                }
                return;
            case "Enter":
                if (highlightedSuggestion !== null) {
                    e.preventDefault();
                    select(highlightedSuggestion);
                } else {
                    close();
                }
                return;
            case "Tab":
                if (highlightedSuggestion !== null) {
                    select(highlightedSuggestion);
                }
                return;
            case "Escape":
                close();
                return;
        }
    };

    return (
        <TextInput name={ name }
            id={ id }
            value={ value }
            onChange={ onTextChange }
            onBlur={ close }
            className="disabled:text-gray-500"
            required={ required }
            enabled={ enabled }
            autocomplete="off"
            inputAttrs={ {
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": isListVisible,
                "aria-controls": isListVisible ? listId : undefined,
                "aria-activedescendant": highlightedIndex === null
                    ? undefined
                    : optionId(highlightedIndex),
                onKeyDown,
            } }
            { ...grid }
        >
            { isListVisible && (
                <ul id={ listId }
                    role="listbox"
                    className="dropdown-options"
                    onMouseDown={ (e) => e.preventDefault() }
                >
                    { suggestions.map((suggestion, index) => {
                        const icon = completions[suggestion];
                        const isHighlighted = index === highlightedIndex;
                        return (
                            <li key={ suggestion }
                                id={ optionId(index) }
                                role="option"
                                aria-selected={ isHighlighted }
                                data-focus={ isHighlighted ? "" : undefined }
                                className="dropdown-option"
                                onMouseMove={ () => setHighlighted(index) }
                                onClick={ () => select(suggestion) }
                            >
                                { icon && <img src={ icon }
                                    alt=""
                                    className="inline-block h-6 w-6 mr-2 rounded-full object-cover"
                                /> }
                                { suggestion }
                            </li>
                        );
                    }) }
                </ul>
            ) }
        </TextInput>
    );
};
Autocomplete.displayName = "Autocomplete";
