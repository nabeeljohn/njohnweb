import classes from "./todocard.module.css";

export default function TodoCard({ cardTitle, cardBody, cardCreatedOn, number }:
    { cardTitle: string, cardBody: string, cardCreatedOn: string, number: number }) {
    return (
        <>
            <div className="w-full my-4 p-0 bg-gray-100 rounded-lg shadow-md text-black flex">
                {/* Left box - number */}
                <div className="w-1/5 bg-gray-300 flex items-center justify-center text-4xl font-bold rounded-l-lg">
                    {number}
                </div>

                {/* Right box - content */}
                <div className="w-4/5 p-6">
                    <p className={classes.title}>{cardTitle}</p>
                    <p>{cardBody}</p>

                    <hr className={classes.divider} />
                    <p className={classes.dateTime}>
                        Created on: {new Date(cardCreatedOn).toLocaleString()}
                    </p>
                </div>
            </div>
        </>
    );
}
