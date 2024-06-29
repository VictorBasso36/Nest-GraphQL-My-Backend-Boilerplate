import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CompanyUpdateOneWithoutCommentNestedInput } from '../company/company-update-one-without-comment-nested.input';
import { UserUpdateOneWithoutCommentNestedInput } from '../user/user-update-one-without-comment-nested.input';
export declare class CommentUpdateWithoutCommentResponseInput {
    id?: StringFieldUpdateOperationsInput;
    title?: NullableStringFieldUpdateOperationsInput;
    serviceType?: NullableStringFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    rating?: NullableFloatFieldUpdateOperationsInput;
    approved?: NullableBoolFieldUpdateOperationsInput;
    removed?: NullableBoolFieldUpdateOperationsInput;
    Company?: CompanyUpdateOneWithoutCommentNestedInput;
    User?: UserUpdateOneWithoutCommentNestedInput;
}
