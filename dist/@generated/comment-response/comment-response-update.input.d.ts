import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUpdateOneRequiredWithoutCommentResponseNestedInput } from '../comment/comment-update-one-required-without-comment-response-nested.input';
export declare class CommentResponseUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    approved?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    Comment?: CommentUpdateOneRequiredWithoutCommentResponseNestedInput;
}
