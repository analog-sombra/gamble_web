

export interface PaymentGateway {
    id: number;
    name: string;
    image: string;
    paymentType: string;
    status: string;
    createdAt: Date;
    createdBy?: number | null;
    updatedAt: Date;
    updatedBy?: number | null;
    deletedAt?: Date | null;
    deletedBy?: number | null;
}
