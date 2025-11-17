export class RequestClass {

    constructor(
        public payload: any,
        public endpoint: any) { }


    private headers = {
        "Access-Control-Allow-Origin": "*",  // Allow all origins
        "Access-Control-Allow-Methods": "*",  // Allow specific methods
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow specific headers
        "Access-Control-Allow-Credentials": "true", // Optional: if using cookies/auth
        "Content-Type": "application/json",
        "Cache-Control": "no-store" // Note: "cache" isn't valid; use "Cache-Control"
    };


    private getResponse(json: any, code: number = 500) {
        return new Response(
            JSON.stringify(json),
            {
                status: code,
                headers: this.headers
            }
        )
    }


    public GetReqeust = async () => {
        try {
            const response = await fetch(this.endpoint, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(this.payload)
            })


            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }


            const data: any = await response.json();

            return this.getResponse(data, 200)

        } catch (error: any) {

            let errorResponse = {
                message: error?.message || error?.error
            }

            return this.getResponse(errorResponse)
        }
    }


    public PostRequest = async () => {
        try {
            const response = await fetch(this.endpoint, {
                method: "POST",
                headers: this.headers,
            })


            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data: any = await response.json();

            return this.getResponse(data, 200)

        } catch (error: any) {

            let errorResponse = {
                message: error?.message || error?.error
            }

            return this.getResponse(errorResponse)
        }
    }

}
