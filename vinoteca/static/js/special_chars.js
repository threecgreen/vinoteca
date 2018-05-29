var $spec_char_btns = $(".spec-chars");
var $shift_btn = $("#shift");
var $text_inputs = $("[type=text]");
/* Keep track of last active text element */
var $last_input = null;
$(document).ready(function() {
    /* Add special character to last input */
    $spec_char_btns.click( function () {
        $($last_input).val($($last_input).val() + $(this).text());
    });
    /* Change special character buttons between upper and lowercase */
    $shift_btn.click( function () {
        if ($shift_btn.text() === "↑") {
            $spec_char_btns.each(function () {
                $(this).text($(this).text().toUpperCase());
            });
            $shift_btn.text("↓");
        }
        else {
            $spec_char_btns.each(function () {
                $(this).text($(this).text().toLowerCase());
            });
            $shift_btn.text("↑");
        }
    });
    
    $text_inputs.focusout(function () {
        $last_input = "#" + this.id;
    });
});
