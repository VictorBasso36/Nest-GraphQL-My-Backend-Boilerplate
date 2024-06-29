import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { UserUpdateOneWithoutCommentNestedInput } from '../user/user-update-one-without-comment-nested.input';
import { CommentResponseUpdateManyWithoutCommentNestedInput } from '../comment-response/comment-response-update-many-without-comment-nested.input';
export declare class CommentUpdateWithoutCompanyInput {
    id?: StringFieldUpdateOperationsInput;
    title?: NullableStringFieldUpdateOperationsInput;
    serviceType?: NullableStringFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    rating?: NullableFloatFieldUpdateOperationsInput;
    approved?: NullableBoolFieldUpdateOperationsInput;
    removed?: NullableBoolFieldUpdateOperationsInput;
    User?: UserUpdateOneWithoutCommentNestedInput;
    CommentResponse?: CommentResponseUpdateManyWithoutCommentNestedInput;
}
