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

export interface ExamSubmit {
    name: string;
    link: string;
    typeId: number;
    yearId: number;
    subjectId: number;
    teacherId: number;
}

export interface ExamTypes {
    P1: Exam[];
    P2: Exam[];
    P3: Exam[];
    others: Exam[];
    ch: Exam[];
}
