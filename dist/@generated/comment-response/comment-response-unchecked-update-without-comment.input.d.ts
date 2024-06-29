import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class CommentResponseUncheckedUpdateWithoutCommentInput {
    id?: StringFieldUpdateOperationsInput;
    approved?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
}
