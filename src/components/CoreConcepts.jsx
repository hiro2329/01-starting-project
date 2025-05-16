import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data.js'


export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept key={concept.title} {...concept} />
                ))}
                {/* map() : 배열의 각 요소를 하나씩 꺼내서 원하는 형태로 바꿔주는 함수, map의 첫 번째 파라미터는 배열의 각 요소 */}
            </ul>
        </section>
    )
}



