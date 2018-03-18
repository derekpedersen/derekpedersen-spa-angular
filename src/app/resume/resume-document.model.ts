import { ResumeDocumentType } from './resume-document-type.enum';

export class ResumeDocument {
    public id: string;
    public documentType: ResumeDocumentType;
    public documentBase64String: string;
}