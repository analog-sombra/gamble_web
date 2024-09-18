


export function dateTimeFormater(timeStamp: string | Date | number) {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(new Date(timeStamp));

    return formattedDate;
}

