

export default function PhotosGrid({photos=[]}){
 


    return(
        <section className="min-h-screen grid  grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

            {events.map(({ index, src}) => (
                <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                    src={src}
                    alt=''
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-105
                    "
                    />
                </div>
            ))}
        </section>
    )
}