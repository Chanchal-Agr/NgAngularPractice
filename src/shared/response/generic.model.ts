export interface Response<T> {
    success: boolean,
    errorMessage: string | null,
    data: IterableResponse<T> | null
}

export interface IterableResponse<T> {
    iterableData: T[] | null,
    count: number
}