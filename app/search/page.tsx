import getSongsbytitle from "@/actions/getSongsbytitle"
import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"

interface searchprops{
    searchParams:{
        title:string
    }
}
const Search=async({searchParams}:searchprops)=>{

    const songs= await getSongsbytitle(searchParams.title)
    return(
        <div className=" bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className=" from-bg-neutral-900 ">
                <div className=" mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">
                        Search

                    </h1>
                    <SearchInput />
                </div>
            </Header>
        </div>
    )
}
export default Search