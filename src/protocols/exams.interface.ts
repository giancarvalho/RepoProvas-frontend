export interface Exam {
    name: string;
    id: number;
    type: string;
    semester: string;
    year: number;
    subject?: string;
    teacher?: string;
    link: string;
}
