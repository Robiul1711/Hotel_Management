import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const PropertyListingForm = ({ button = true }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="">
                    {
                        button ?
                            <button className="xmd:bg-primary xmd:text-white text-primary border text-[10px] p-1 md:text-base border-primary  md:px-8  md:py-3 rounded-full hover:bg-orange-600 transition-all px-3">
                                Enquire Now
                            </button>
                            :
                            <p className='font-bold mb-0' >
                                List your villa
                            </p>
                    }

                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                   

                    <iframe
                        title="Hich Booking Property Listing Form"
                        aria-label='Hich Property Listing Form'
                        src='https://forms.zohopublic.com/happiitude/form/HichPropertyListingForm/formperma/2wuMbd8M93PW9XR8H_VhHc_t6FgjD9N2BSSRP17Cw78'
                        frameBorder="0"
                        style={{ height: "800px", width: "100%", border: "none" }}
                    />

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PropertyListingForm;