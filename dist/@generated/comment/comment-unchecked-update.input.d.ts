import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CommentResponseUncheckedUpdateManyWithoutCommentNestedInput } from '../comment-response/comment-response-unchecked-update-many-without-comment-nested.input';
export declare class CommentUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    title?: NullableStringFieldUpdateOperationsInput;
    serviceType?: NullableStringFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    rating?: NullableFloatFieldUpdateOperationsInput;
    approved?: NullableBoolFieldUpdateOperationsInput;
    removed?: NullableBoolFieldUpdateOperationsInput;
    companyId?: NullableStringFieldUpdateOperationsInput;
    userId?: NullableStringFieldUpdateOperationsInput;
    CommentResponse?: CommentResponseUncheckedUpdateManyWithoutCommentNestedInput;
}
