import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';
export declare class CommentCreateOrConnectWithoutCompanyInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    create: CommentCreateWithoutCompanyInput;
}
