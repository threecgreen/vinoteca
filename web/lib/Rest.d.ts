export interface IColor { id: number; name: string }
export interface IColorForm { name: string }
export interface IGrape { id: number; name: string; wineCount: number }
export interface IGrapeForm { name: string }
export interface IProducer { id: number; name: string; regionId: number }
export interface IProducerForm { name: string; regionId: number }
export interface IPurchase {     id: number; price: number | null; quantity: number | null; vintage:     number | null; memo: string | null; store: string | null; storeId:     number | null; wineId: number; date: number | null }
export interface IPurchaseForm {     price: number | null; quantity: number | null; vintage: number | null; memo: string | null; storeId: number | null; wineId: number; date: number | null }
export interface IRegion { id: number; name: string }
export interface IRegionForm { name: string }
export interface IStore { id: number; name: string }
export interface IStoreForm { name: string }
export interface IVitiArea { id: number; name: string; regionId: number; region: string }
export interface IVitiAreaForm { name: string; regionId: number }
export interface IWine {     id: number; description: string | null; notes: string | null; rating: number | null; inventory: number; why: string | null; colorId:     number; color: string; producerId: number; producer: string;     regionId: number; region: string; vitiAreaId: number | null;     vitiArea: string | null; name: string | null; wineTypeId: number;     wineType: string; lastPurchaseVintage: number | null }
export interface IWineForm {     description: string | null; notes: string | null; rating: number |     null; inventory: number; why: string | null; colorId: number;     producerId: number; vitiAreaId: number | null; name: string | null;     wineTypeId: number }
export interface IWineGrape {     id: number; percent: number | null; grapeId: number; grape: string; wineId: number }
export interface IWineGrapeForm { percent: number | null; grapeId: number; wineId: number }
export interface IWineType { id: number; name: string }
export interface IWineTypeForm { name: string }
export type AssociatedGrape = { percent: number | null; grapeId: number };
export interface IInventoryWine {     id: number; color: string; name: string | null; wineTypeId: number; wineType: string; producerId: number; producer: string; regionId:     number; region: string; lastPurchaseVintage: number; lastPurchaseDate: number; inventory: number; lastPurchasePrice: number }
export interface IMostCommonPurchaseDate { mostCommonPurchaseDate: number | null }
export interface IRecentPurchase {     id: number; price: number | null; quantity: number | null; vintage:     number | null; memo: string | null; store: string | null; date:     number | null; wineId: number; wineName: string | null; producerId:     number; producer: string; regionId: number; region: string;     wineTypeId: number; wineType: string }
export interface ITopEntity {     id: number; name: string; quantity: number; varieties: number;     avgPrice: number }
export interface IPurchaseCount { count: number }
export interface ITotalLiters { totalLiters: number }
export interface IVitiAreaStats {     id: number; name: string; totalWines: number; avgPrice: number |     null; avgRating: number | null }
export interface IWineCount { count: number }
export interface IWinePatchForm { inventory: number }
export interface IWineGrapesForm { wineId: number; grapes: AssociatedGrape [] }
export interface IYearsPurchases {     year: number; quantity: number; totalPrice: number | null; avgPrice: number | null }
