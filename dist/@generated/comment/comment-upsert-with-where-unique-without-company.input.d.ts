import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutCompanyInput } from './comment-update-without-company.input';
import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';
export declare class CommentUpsertWithWhereUniqueWithoutCompanyInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    update: CommentUpdateWithoutCompanyInput;
    create: CommentCreateWithoutCompanyInput;
}
