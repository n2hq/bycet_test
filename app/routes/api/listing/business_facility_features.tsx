import { ActionFunctionArgs, LoaderFunction } from "@remix-run/node"

import { ListingType } from "~/lib/types"
import { DoResponse, GenerateRandomHash } from "~/lib/lib"
import { query } from "../DB"




export const loader: LoaderFunction = async ({ request, params }) => {
    const contentType = request.headers.get("Content-Type")

    /* if (contentType !== "application/json") {
        return new Response(JSON.stringify({ error: "Invalid content type. Expected JSON." }))
    } */

    const businessGuid = params.business_guid

    const selectedFeatureQuery = `SELECT
        a.feature_id, a.user_description, a.business_guid
        FROM 
        tbl_selected_facility_features a 
        WHERE 
        a.business_guid = ?`

    try {
        const rawdata: any = await query(selectedFeatureQuery,
            [
                businessGuid
            ])

        console.log(rawdata)

        return DoResponse(rawdata, 200)

    } catch (error: any) {
        return DoResponse({ "error": error.message }, 500)
    }

}