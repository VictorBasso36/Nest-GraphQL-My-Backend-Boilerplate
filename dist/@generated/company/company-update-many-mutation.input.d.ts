import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
export declare class CompanyUpdateManyMutationInput {
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
}
