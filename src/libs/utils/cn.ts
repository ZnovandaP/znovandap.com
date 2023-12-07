import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

// cn utility (twMerge + clsx)

const cn = (...input: ClassValue[]) => (twMerge(clsx(input)));

export default cn;
