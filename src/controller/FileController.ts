import { TextEditor, Uri } from "vscode";
import { FileItem } from "../FileItem";

export interface DialogOptions {
    prompt?: string;
    uri?: Uri;
}

export interface ExecuteOptions {
    fileItem: FileItem;
}

export interface GetSourcePathOptions {
    relativeToRoot?: boolean;
    ignoreIfNotExists?: boolean;
    uri?: Uri;
}

export interface FileController {
    showDialog(options?: DialogOptions): Promise<FileItem | FileItem[] | undefined>;
    execute(options: ExecuteOptions): Promise<FileItem>;
    openFileInEditor(fileItem: FileItem): Promise<TextEditor | undefined>;
    closeCurrentFileEditor(): Promise<unknown>;
    getSourcePath(options?: GetSourcePathOptions): Promise<string>;
}
