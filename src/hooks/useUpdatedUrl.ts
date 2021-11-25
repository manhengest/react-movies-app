import { useRouter } from "next/router";

const useUpdatedUrl = () => {
    const router = useRouter()

    const updateUrl = (
        searchQuery?,
        genres = router.query?.genres,
        sortBy?,
        movieID?): Promise<any> => {
        return new Promise(resolve => {
            // doesnt work as default parameter
            if (!searchQuery) {
                searchQuery = router.query?.searchQuery
            }

            router.push(
                {
                    pathname: "/search/[[...query]]",
                    query: { searchQuery, genres },
                },
                `/search/${searchQuery}${genres ? "?genres=" + genres : ""}`,
                { shallow: true }
            )

            resolve({
                query: [ searchQuery ],
                genres
            })
        })
    }

    return { updateUrl }
}

export default useUpdatedUrl
