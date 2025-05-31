export const extractFormData = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    return Object.fromEntries(formData.entries());
}