import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';
import { CommentCreateOrConnectWithoutCompanyInput } from './comment-create-or-connect-without-company.input';
import { CommentUpsertWithWhereUniqueWithoutCompanyInput } from './comment-upsert-with-where-unique-without-company.input';
import { CommentCreateManyCompanyInputEnvelope } from './comment-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutCompanyInput } from './comment-update-with-where-unique-without-company.input';
import { CommentUpdateManyWithWhereWithoutCompanyInput } from './comment-update-many-with-where-without-company.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
export declare class CommentUpdateManyWithoutCompanyNestedInput {
    create?: Array<CommentCreateWithoutCompanyInput>;
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCompanyInput>;
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutCompanyInput>;
    createMany?: CommentCreateManyCompanyInputEnvelope;
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    update?: Array<CommentUpdateWithWhereUniqueWithoutCompanyInput>;
    updateMany?: Array<CommentUpdateManyWithWhereWithoutCompanyInput>;
    deleteMany?: Array<CommentScalarWhereInput>;
}
