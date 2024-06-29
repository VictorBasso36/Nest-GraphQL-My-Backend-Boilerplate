import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutCompanyInput } from './comment-update-without-company.input';
export declare class CommentUpdateWithWhereUniqueWithoutCompanyInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    data: CommentUpdateWithoutCompanyInput;
}
