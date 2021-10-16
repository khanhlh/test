import { useState } from "react";

export default function BT1() {
    const [hs, setHs] = useState(20)
    const qs = []
    const lop = []

    // try to pust correct qs to hs
    for (var i=0; i<hs; i++) {
        const ans = []
        const availQs = qs.filter(q => q<3)
        // add more questions to full fill the answer
        for (var j=0; j<i-availQs.length; j++) qs.push(0)
        for (var k=0; k<qs.length; k++) {
            if (qs[k] < 3 && ans.length < i) {
                ans.push(k+1)
                qs[k] += 1
            }
        }
        lop.push(ans)
    }

    return (
        <>
        <div class="container p-4">
            Số Học sinh: <input value={hs} onChange={e => setHs(e.target.value)} />
            <div>
                <div>Số câu hỏi: {qs.length}</div>
                <div>
                    <h3>Câu trả lời đúng:</h3>
                    <ul>
                        {lop.map((ans, i) => (
                            <li>
                            <span>HS {i+1}: </span>
                            <span>{ans.join(', ')}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}