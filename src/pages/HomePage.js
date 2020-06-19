import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Jaki system treningowy wybrać?",
        text: "Popularną metodą jest FBW 5×5. System ten zakłada wykonywanie treningu całego ciała trzy razy w tygodniu, bazując na ćwiczeniach wielostawowych. Zazwyczaj  w planie mamy 4, maksymalnie 5 ćwiczeń, które wykonujemy po 5 serii i po 5 powtórzeń w każdej z nich. Treningi typowo pod budowanie siły mięśniowej, zazwyczaj są adresowane dla osób doświadczonych, mających za sobą już pewien staż treningowy. Doświadczenie pozwala na ocenę swoich możliwości, co przyda się m.in. w doborze obciążenia treningowego. FBW 5×5 cechuje się łatwością wykonania, bazowaniem na podstawowych bojach siłowych. Zrozumienie założeń nie powinno sprawiać więc problemu osobom, rozpoczynającym przygodę z budowaniem siły mięśniowej. Dodatkowo nie wymaga skomplikowanych obliczeń, a progresja obciążenia następuje, gdy nasze mięśnie są na to gotowe."
    },
    {
        id: 2,
        title: "Pierwsze kroki – dobór obciążenia do progresji",
        text: <><p>Zanim przystąpimy do wykonywania pierwszego treningu siłowego, powinniśmy znać naszą maksymalną siłę dla pięciu powtórzeń w poszczególnych bojach. Sprawdzić musimy więc siłę w takich ćwiczeniach jak przysiad, wyciskanie leżąc czy martwy ciąg. Dodatkowo przyda się wiedza, odnośnie naszej siły dla 5 powtórzeń do wykonywania: wiosłowania sztangą, wyciskania żołnierskiego, czy podciągania na drążku.</p>
        <p> Wiedząc już jakim ciężarem jesteśmy w stanie wykonać 5 powtórzeń w serii, dobieramy obciążenie tak, by z tygodnia na tydzień progresować, dążąc do naszych maksów. Jeżeli osiągniemy nasze maksymalne obciążenie w serii, podczas treningu, progresja powinna postępować dalej, aż dopadnie nas stagnacja. (Brak progresji przez tydzień, dwa, powinien zakończyć się przerwą w treningach lub wykonywaniu tego planu)</p>
        <p>Jeżeli zaczynamy się cofać lub nie wykonaliśmy założonej liczy powtórzeń, powinniśmy zatrzymać się z progresją i powtarzać trening tak długo, dopóki nie ruszymy dalej. Złamanie zasady 5 powtórzeń, wykonując np. 4, może grozić brakiem dalszych postępów i koniecznością przerwy np. z powodu braku regeneracji.
        Przerwy między seriami mogą czasem wymagać nawet 5 min odpoczynku, stąd pospiech nie jest wskazany. Układ nerwowy regeneruje się nieco dłużej, a celem treningu nie jest osiągnięcie hipertrofii mięśniowej. Dodatkowo, tempo powtórzeń powinno być równe, bez szarpania. Faza negatywna w pełnej kontroli mięśniowej.</p></>
    },
    {
        id: 3,
        title: "Praktyczne wskazówki",
        text: <><p>–Rozgrzewka – powinna uwzględniać wszystkie partie mięśniowe, podnieść maksymalnie ciepłotę ciała, przygotować organizm na ciężkie serie. Powinniśmy starać się utrzymywać ciepło naszego ciała. Jeżeli trenujemy na klimatyzowanej siłowni lub w porze roku gdzie jest nieco chłodniej, pamiętajmy o bluzie i spodniach. Dodatkowo zadbać o stretching dynamiczny, który przygotuje nasze tkanki okołostawowe, na zmiany rozciągliwości i obciążenia. Między seriami nie siedźmy bezczynnie, spaceruj, wykonuj delikatne ruchy kończyn, a nawet można włączyć między seriami delikatny stretch.</p>
        <p>–Technika – prawidłowa technika, to trening, który będzie przeciążał nasze mięsnie
        i układ nerwowy (i prawidłowo), a nie stawy, ścięgna, więzadła. Przed przystąpieniem do treningu, odświeżmy naszą wiedzę na temat ćwiczeń, a jak mamy wątpliwości co do prawidłowego wykonywania bojów, poprośmy osobę doświadczoną o wskazówki.</p>
        <p> –Asekuracja – jest to dość istotny element treningu siłowego. Partner treningowy da nam poczucie komfortu psychicznego, zapewni pomoc gdy braknie nam sił, doda motywacji. Jeżeli trenujmy sami, starajmy się wykonywać przysiady w klatce lub miejscu, gdzie możliwe jest zrzucenie bezpieczne sztangi. Wyciskanie leżąc natomiast na ławce ze specjalnymi ramionami zabezpieczającymi. Nie wykonujmy treningu stosując chwyt tzw. małpi.</p>
        <p>–Regeneracja – odpowiednie zadbanie o regeneracje i odnowę biologiczną jest konieczne w celu progresji z obciążeniem. Nie wystarczająca ilość snu, brak odpoczynku w ciągu dnia, lub zbyt duża aktywność fizyczna poza siłownią, powinna być uwzględniona w wydatku energetycznym oraz wsparta przez różnego rodzaju formy relaksacji jak np.: masaż, basen, sauna. Dodatkowo istotnym elementem jest nasze odżywianie, zapewnienie wysokiej jakości paliwa, bogatego w witaminy i minerały.</p>
        <p>-Podsumowanie - Wybierając trening siłowy powinniśmy przede wszystkim skupić się na doborze metody treningowej uwzględniającej nasze możliwości regeneracyjne. Osoby pracujące umysłowo lub nie mające zbyt dużo aktywności w ciągu dnia, mogą pozwolić sobie na bardziej skomplikowane schematy, które będą wymagały znacznej regeneracji i wypoczynku. Metoda która jest zaprezentowana w artykule, stanowi dobra opcję dla osób, które chcą zwiększyć siłę mięśni, jednak nie chcą komplikować swojego życia. FBW 5×5 to bardzo dobre rozwiązanie dla osób początkujących (w znaczeniu stricte budowania siły, niekoniecznie treningu siłowego), jednak również sprawdzi się u osób bardziej doświadczonych.</p></>
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;