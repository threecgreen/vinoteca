/// Generates an API contract TypeScript type definition file,
/// in web/lib/Restd.d.ts
use vinoteca::logs::{LogForm, LogResponse};
use vinoteca::models::*;
use vinoteca::purchases::{
    MostCommonPurchaseDate, PurchaseCount, RecentPurchase, TotalLiters, YearsPurchases,
};
use vinoteca::users::{ChangePasswordForm, ChangeUserForm, LoginForm};
use vinoteca::viti_areas::VitiAreaStats;
use vinoteca::wine_grapes::{AssociatedGrape, WineGrapesForm};
use vinoteca::wines::{InventoryWine, WineCount, WinePatchForm};
use vinoteca::error::VinotecaError;

use std::borrow::Cow;
use std::error;
use std::fs::File;
use std::io::{self, BufWriter, Write};
use std::path::Path;
use typescript_definitions::TypeScriptifyTrait;

fn write_interface(
    writer: &mut BufWriter<&File>,
    ts_def: Cow<'static, str>,
) -> Result<(), io::Error> {
    let ts_def = ts_def
        .replacen("export type ", "export interface I", 1)
        .replacen("= ", "", 1);
    // Get rid of last semi-colon
    writeln!(writer, "{}", &ts_def[..ts_def.len() - 1])
}

fn write_version(writer: &mut BufWriter<&File>) -> Result<(), io::Error> {
    let version = env!("CARGO_PKG_VERSION");
    writeln!(writer, "export const VERSION = \"{}\";", version)
}

fn main() -> Result<(), Box<dyn error::Error>> {
    // Truncate file if it already exists
    let type_def_file =
        File::create(Path::new(env!("CARGO_MANIFEST_DIR")).join("web/lib/api/Rest.d.ts"))?;
    let mut type_def_writer = BufWriter::new(&type_def_file);
    // Main db models
    write_interface(&mut type_def_writer, Color::type_script_ify())?;
    write_interface(&mut type_def_writer, ColorForm::type_script_ify())?;
    write_interface(&mut type_def_writer, Grape::type_script_ify())?;
    write_interface(&mut type_def_writer, GrapeForm::type_script_ify())?;
    write_interface(&mut type_def_writer, Producer::type_script_ify())?;
    write_interface(&mut type_def_writer, ProducerForm::type_script_ify())?;
    write_interface(&mut type_def_writer, Purchase::type_script_ify())?;
    write_interface(&mut type_def_writer, PurchaseForm::type_script_ify())?;
    write_interface(&mut type_def_writer, Region::type_script_ify())?;
    write_interface(&mut type_def_writer, RegionForm::type_script_ify())?;
    write_interface(&mut type_def_writer, Store::type_script_ify())?;
    write_interface(&mut type_def_writer, StoreForm::type_script_ify())?;
    write_interface(&mut type_def_writer, User::type_script_ify())?;
    write_interface(&mut type_def_writer, UserForm::type_script_ify())?;
    write_interface(&mut type_def_writer, VitiArea::type_script_ify())?;
    write_interface(&mut type_def_writer, VitiAreaForm::type_script_ify())?;
    write_interface(&mut type_def_writer, Wine::type_script_ify())?;
    write_interface(&mut type_def_writer, WineForm::type_script_ify())?;
    write_interface(&mut type_def_writer, WineGrape::type_script_ify())?;
    write_interface(&mut type_def_writer, WineGrapeForm::type_script_ify())?;
    write_interface(&mut type_def_writer, WineType::type_script_ify())?;
    write_interface(&mut type_def_writer, WineTypeForm::type_script_ify())?;

    // Write this one normally because it's referenced in `WineGrapesForm`
    writeln!(
        &mut type_def_writer,
        "{}",
        AssociatedGrape::type_script_ify()
    )?;
    // Write normally because it's a discriminated union
    writeln!(&mut type_def_writer, "{}", VinotecaError::type_script_ify())?;
    // Other models
    write_interface(&mut type_def_writer, ChangePasswordForm::type_script_ify())?;
    write_interface(&mut type_def_writer, ChangeUserForm::type_script_ify())?;
    write_interface(&mut type_def_writer, InventoryWine::type_script_ify())?;
    write_interface(&mut type_def_writer, LogForm::type_script_ify())?;
    write_interface(&mut type_def_writer, LogResponse::type_script_ify())?;
    write_interface(&mut type_def_writer, LoginForm::type_script_ify())?;
    write_interface(
        &mut type_def_writer,
        MostCommonPurchaseDate::type_script_ify(),
    )?;
    write_interface(&mut type_def_writer, RecentPurchase::type_script_ify())?;
    write_interface(&mut type_def_writer, generic::TopEntity::type_script_ify())?;
    write_interface(&mut type_def_writer, PurchaseCount::type_script_ify())?;
    write_interface(&mut type_def_writer, TotalLiters::type_script_ify())?;
    write_interface(&mut type_def_writer, VitiAreaStats::type_script_ify())?;
    write_interface(&mut type_def_writer, WineCount::type_script_ify())?;
    write_interface(&mut type_def_writer, WinePatchForm::type_script_ify())?;
    write_interface(&mut type_def_writer, WineGrapesForm::type_script_ify())?;
    write_interface(&mut type_def_writer, YearsPurchases::type_script_ify())?;

    let const_file =
        File::create(Path::new(env!("CARGO_MANIFEST_DIR")).join("web/lib/constants.ts"))?;
    let mut const_writer = BufWriter::new(&const_file);
    write_version(&mut const_writer)?;

    Ok(())
}
