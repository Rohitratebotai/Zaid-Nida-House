
interface HeadingProps {
    title: string,
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <section>
            <div className="py-10  md:pb-24 md:pt-20 tracking-wide flex justify-center items-center text-xl md:text-2xl lg:text-5xl font-medium">
                <p>{title} </p>
            </div>
        </section>
    )
}

export default Heading