export const movieDurationConverter = (duration: number): string => {
    const hours = (duration / 60);
    const clearedHours = Math.floor(hours);
    const minutes = (hours - clearedHours) * 60;
    const clearedMinutes = Math.round(minutes);
    return clearedMinutes ? `${clearedHours ? clearedHours + "h " : ""}${clearedMinutes}min` : `${clearedHours}h`
}

export const addOrRemoveFromArray = (array: any[], newItem: any) => {
    array.indexOf(newItem) === -1 ? array.push(newItem) : array.splice(array.indexOf(newItem), 1)

    return array
}

// const { searchQuery } = useParams()
// const match = useRouteMatch();
// history.push(
//     generatePath(match.path, { ...match.params, ...searchParams })
// )
