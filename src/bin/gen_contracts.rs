extern crate typescript_definitions;
extern crate vinoteca;

use vinoteca::models::*;
use vinoteca::purchases::{MostCommonPurchaseDate, RecentPurchase, TotalLiters, YearsPurchases};
use vinoteca::viti_areas::VitiAreaStats;
use vinoteca::wine_types::TopWineType;
use vinoteca::wines::InventoryWine;

use std::borrow::Cow;
use std::fs::File;
use std::io::{BufWriter, Write};
use std::path::Path;
use typescript_definitions::TypeScriptifyTrait;

#[allow(unused)]
fn write_interface(writer: &mut BufWriter<&File>, ts_def: Cow<'static, str>) {
    let ts_def = ts_def
        .replacen("export type ", "export interface I", 1)
        .replacen("= ", "", 1);
    // Get rid of last semi-colon
    writeln!(writer, "{}", &ts_def[..ts_def.len() - 1]);
}

#[allow(unused)]
fn main() {
    if cfg!(debug_assertions) {
        // Truncate file if it already exists
        let file =
            File::create(Path::new(env!("CARGO_MANIFEST_DIR")).join("vinoteca/lib/Rest.d.ts"))
                .expect("Couldn't open TypeScript contracts file");
        let mut writer = BufWriter::new(&file);
        // Main db models
        write_interface(&mut writer, Color::type_script_ify());
        write_interface(&mut writer, ColorForm::type_script_ify());
        write_interface(&mut writer, Grape::type_script_ify());
        write_interface(&mut writer, GrapeForm::type_script_ify());
        write_interface(&mut writer, Producer::type_script_ify());
        write_interface(&mut writer, ProducerForm::type_script_ify());
        write_interface(&mut writer, Purchase::type_script_ify());
        write_interface(&mut writer, PurchaseForm::type_script_ify());
        write_interface(&mut writer, Region::type_script_ify());
        write_interface(&mut writer, RegionForm::type_script_ify());
        write_interface(&mut writer, Store::type_script_ify());
        write_interface(&mut writer, StoreForm::type_script_ify());
        write_interface(&mut writer, VitiArea::type_script_ify());
        write_interface(&mut writer, VitiAreaForm::type_script_ify());
        write_interface(&mut writer, WineType::type_script_ify());
        write_interface(&mut writer, WineTypeForm::type_script_ify());
        write_interface(&mut writer, WineGrape::type_script_ify());
        write_interface(&mut writer, WineGrapeForm::type_script_ify());
        write_interface(&mut writer, Wine::type_script_ify());
        write_interface(&mut writer, WineForm::type_script_ify());

        writeln!(&mut writer);
        // Other models
        write_interface(&mut writer, InventoryWine::type_script_ify());
        write_interface(&mut writer, MostCommonPurchaseDate::type_script_ify());
        write_interface(&mut writer, RecentPurchase::type_script_ify());
        write_interface(&mut writer, TopWineType::type_script_ify());
        write_interface(&mut writer, TotalLiters::type_script_ify());
        write_interface(&mut writer, VitiAreaStats::type_script_ify());
        write_interface(&mut writer, YearsPurchases::type_script_ify());
    };
}
