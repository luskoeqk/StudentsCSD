import StudentFormGetAll from "@/components/formCRUD/StudentFormGetAll";
import { PageConfig } from "@/styles/PagesConfigElements";

export default function masters() {
    return (
        <PageConfig>
            <h1>Кандидат студентски документи - Магистри</h1>
            <StudentFormGetAll/>
        </PageConfig>
    )
}
