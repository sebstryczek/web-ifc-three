import { IFCManager } from './IFC/components/IFCManager';
import { Loader, LoadingManager } from 'three';
import { IFCModel } from './IFC/components/IFCModel';
declare class IFCLoader extends Loader<any, string> {
    ifcManager: IFCManager;
    private onProgress?;
    constructor(manager?: LoadingManager);
    load(url: any, onLoad: (ifc: IFCModel) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: unknown) => void): void;
    parse(buffer: ArrayBuffer): Promise<IFCModel>;
}
export { IFCLoader };