import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CompanyUpdateOneRequiredWithoutCommentNestedInput } from '../company/company-update-one-required-without-comment-nested.input';
import { CommentResponseUpdateManyWithoutCommentNestedInput } from '../comment-response/comment-response-update-many-without-comment-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    rating?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    approved?: BoolFieldUpdateOperationsInput;

    @Field(() => CompanyUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    Company?: CompanyUpdateOneRequiredWithoutCommentNestedInput;

    @Field(() => CommentResponseUpdateManyWithoutCommentNestedInput, {nullable:true})
    CommentResponse?: CommentResponseUpdateManyWithoutCommentNestedInput;
}
