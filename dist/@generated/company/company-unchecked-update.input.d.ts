import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutCompanyNestedInput } from '../user/user-unchecked-update-many-without-company-nested.input';
import { CommentUncheckedUpdateManyWithoutCompanyNestedInput } from '../comment/comment-unchecked-update-many-without-company-nested.input';
export declare class CompanyUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    cnpj?: StringFieldUpdateOperationsInput;
    location?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    urlImage?: NullableStringFieldUpdateOperationsInput;
    working?: NullableStringFieldUpdateOperationsInput;
    approved?: NullableBoolFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    ratingCount?: NullableIntFieldUpdateOperationsInput;
    rating?: NullableFloatFieldUpdateOperationsInput;
    User?: UserUncheckedUpdateManyWithoutCompanyNestedInput;
    Comment?: CommentUncheckedUpdateManyWithoutCompanyNestedInput;
}
