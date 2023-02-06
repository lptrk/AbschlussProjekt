export interface Doc {
  id: number;
  GoogleDriveFileID: string;
  SQLBlobID: number;
  Source: string;
  DocType: string;
  DocumentNumber: string;
  PlantDocumentNumber: string;
  FileName: string;
  FullPath: string;
  ParentFolderName: string;
  TimeStamp: Date;
  Content?: any;
  tmpFullWorkspacePath?: any;
  tmpErrStr?: any;
}
