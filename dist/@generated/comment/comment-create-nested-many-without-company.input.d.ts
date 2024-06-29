import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';
import { CommentCreateOrConnectWithoutCompanyInput } from './comment-create-or-connect-without-company.input';
import { CommentCreateManyCompanyInputEnvelope } from './comment-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class CommentCreateNestedManyWithoutCompanyInput {
    create?: Array<CommentCreateWithoutCompanyInput>;
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCompanyInput>;
    createMany?: CommentCreateManyCompanyInputEnvelope;
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
