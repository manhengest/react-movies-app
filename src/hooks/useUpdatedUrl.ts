import { useRouter } from "next/router";

const useUpdatedUrl = () => {
    const router = useRouter()

    const updateUrl = (searchQuery?, genres?, sortBy?): Promise<any> => {
        return new Promise(resolve => {
            // doesnt work as default parameter
            if (!searchQuery) {
                searchQuery = (router.query?.query && router.query?.query.length) ? router.query?.query[0] : ""
            }
            if (!genres) {
                genres = router.query?.genres
            }
            if (!sortBy) {
                sortBy = router.query?.sortBy
            }

            router.push(
                {
                    pathname: "/search/[[...query]]",
                    query: { genres, sortBy },
                },
                `/search/${searchQuery}${genres ? "?genres=" + genres : ""}${sortBy ? "?sortBy=" + sortBy : ""}`,
                { shallow: true }
            )

            resolve({
                query: [ searchQuery ? searchQuery : "" ],
                genres,
                sortBy
            })
        })
    }

    return { updateUrl }
}

export default useUpdatedUrl
