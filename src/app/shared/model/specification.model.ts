import { FormControl } from "@angular/forms";

export interface SpecificationForm {
    id: FormControl<number | null>
    name: FormControl<string | null>
}

export interface SpecificationList {
    id: number,
    name: string
}

