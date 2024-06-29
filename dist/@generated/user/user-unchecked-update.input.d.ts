import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
export declare class UserUncheckedUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    firstname?: NullableStringFieldUpdateOperationsInput;
    lastname?: NullableStringFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput;
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput;
    companyId?: NullableStringFieldUpdateOperationsInput;
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput;
}