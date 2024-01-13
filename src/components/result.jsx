export default function Result({ isLoading }) {
    return (
        <>
            <div className=" border rounded-md p-6">
                <h3 className="text-3xl font-bold text-center">
                    Result :
                </h3>
                <div className="h-16" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {isLoading ? <SkeletonLoading /> : <CarCards />}


                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Car Name</h3>
                    <p className="py-4">200000 DA</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <img className="w-full rounded-lg shadow-xl mb-4" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="something" />
                            <ul className="text-lg">
                                <li><span className="font-bold">Model :</span> 2000</li>
                                <li><span className="font-bold">Model :</span> 2000</li>
                                <li><span className="font-bold">Model :</span> 2000</li>
                                <li><span className="font-bold">Model :</span> 2000</li>
                                <li><span className="font-bold">Model :</span> 2000</li>
                                <li><span className="font-bold">Model :</span> 2000</li>
                                <li><span className="font-bold">Model :</span> 2000</li>
                            </ul>
                            <div className="w-full flex justify-end items-center">
                                <button className="btn btn-primary">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}




function SkeletonLoading() {
    return (
        <>
            {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="aspect-[5/6] skeleton w-full/" />
            ))}
        </>
    );
}


function CarCards() {
    return (
        <>
            {
                [0, 1, 2].map((item, index) => (
                    <div key={index} className="card bg-base-100 border-zinc-600 border-2 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}