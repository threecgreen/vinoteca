/// Generates an API contract TypeScript type definition file (web/generated/rest.d.ts) and
/// a shared constants file (web/generated/constants.ts).
use vinoteca::error::VinotecaError;
use vinoteca::logs::{LogForm, LogResponse};
use vinoteca::models::*;
use vinoteca::purchases::{
    MostCommonPurchaseDate, PurchaseCount, RecentPurchase, TotalLiters, YearsPurchases,
};
use vinoteca::users::{ChangePasswordForm, ChangeUserForm, LoginForm};
use vinoteca::version::Version;
use vinoteca::viti_areas::VitiAreaStats;
use vinoteca::wine_grapes::{AssociatedGrape, WineGrapesForm};
use vinoteca::wines::{InventoryWine, Rotation, RotationForm, WineCount, WinePatchForm};

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

fn write_const(writer: &mut BufWriter<&File>, name: &str, value: &str) -> io::Result<()> {
    writeln!(writer, "export const {} = \"{}\";", name, value)
}

fn write_log_level(writer: &mut BufWriter<&File>) -> io::Result<()> {
    let mut log_level = option_env!("ROCKET_LOG").unwrap_or("info");
    // What rocket calls critical, actually includes warnings
    if log_level == "critical" {
        log_level = "warning";
    }
    write_const(writer, "LOG_LEVEL", log_level)
}

fn write_contracts() -> Result<(), Box<dyn error::Error>> {
    let const_file = File::create(
        Path::new(env!("CARGO_MANIFEST_DIR"))
            .join("web")
            .join("generated")
            .join("constants.ts"),
    )?;
    let mut const_writer = BufWriter::new(&const_file);
    let vinoteca::version::Version { version, git_sha } = vinoteca::version::get().into_inner();
    write_const(&mut const_writer, "VERSION", version)?;
    write_log_level(&mut const_writer)?;
    Ok(write_const(&mut const_writer, "GIT_SHA", git_sha)?)
}

fn write_enums() -> Result<(), Box<dyn error::Error>> {
    let enum_file = File::create(
        Path::new(env!("CARGO_MANIFEST_DIR"))
            .join("web")
            .join("generated")
            .join("enums.ts"),
    )?;
    let mut enum_writer = BufWriter::new(&enum_file);
    Ok(writeln!(
        &mut enum_writer,
        "{}",
        Rotation::type_script_ify()
    )?)
}

fn main() -> Result<(), Box<dyn error::Error>> {
    // Truncate file if it already exists
    let type_def_file = File::create(
        Path::new(env!("CARGO_MANIFEST_DIR"))
            .join("web")
            .join("generated")
            .join("rest.d.ts"),
    )?;
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
    write_interface(&mut type_def_writer, Version::type_script_ify())?;
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
    // Write discriminated unions normally
    writeln!(&mut type_def_writer, "{}", VinotecaError::type_script_ify())?;
    writeln!(&mut type_def_writer, "{}", WinePatchForm::type_script_ify())?;
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
    write_interface(&mut type_def_writer, RotationForm::type_script_ify())?;
    write_interface(&mut type_def_writer, generic::TopEntity::type_script_ify())?;
    write_interface(&mut type_def_writer, PurchaseCount::type_script_ify())?;
    write_interface(&mut type_def_writer, TotalLiters::type_script_ify())?;
    write_interface(&mut type_def_writer, VitiAreaStats::type_script_ify())?;
    write_interface(&mut type_def_writer, WineCount::type_script_ify())?;
    write_interface(&mut type_def_writer, WineGrapesForm::type_script_ify())?;
    write_interface(&mut type_def_writer, YearsPurchases::type_script_ify())?;

    write_contracts()?;
    write_enums()?;

    Ok(())
}
