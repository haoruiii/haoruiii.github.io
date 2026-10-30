---
layout: page
title: "LLM’s Coding of Sample Survey Responses"
description: "for umich FA26 SOC 310 section on Oct. 30, 2026"
permalink: /assets/files/en-us/gsi_fa26-soc-310/materials_wk9_1030_p2LLMcode/
nav: false
lang: en-us
---

For the [discussion sections on Friday, October 30, 2026](/assets/files/en-us/gsi_fa26-soc-310/slides_wk9_1030.pdf) for **Sociology 310 - [Sociological Research Methods](/teachings/fa26-soc-310/)** at the University of Michigan, I designed [a practice](/assets/files/en-us/gsi_fa26-soc-310/materials_wk9_1030_p2info.pdf) for students to try coding for responses to open-ended questions in surveys. This page is to record how LLM (DeepSeek-V4.1-Flash), which generated the responses, may code [the simulated responses](/assets/files/en-us/gsi_fa26-soc-310/materials_wk9_1030_p2data.xlsx). 

---

## How to read these memos

Denominators shift with the missingness, so each memo states its own:

- **Q1_Probe:** substantive **n = 23** (28 minus 5 non-respondents: 2, 11, 19, 22, 25)
- **Q2 items:** substantive **n = 21** (28 minus 3 skip-logic cases — 4, 16, 23 — minus 3 non-responses — 9, 12, 26 — minus 1 inconsistency — 7)
- **Q1A / Q1B closed items:** full **n = 28** (these were answered by everyone)

Memos are analytic, not descriptive: each states a pattern, gives the evidence, names the disconfirming case, and says what it would take to break the claim. The data are simulated; every memo below is an argument about *these* data, written in the register you'd use on real data, so students can see the difference between a theme list and a memo.

---

## Memo 1 — The general and the personal are two different beliefs, and the gap is where the theory lives

**Pattern.** Respondents are near-consensus optimists about *people in general* and sharply stratified about *themselves*.

| | "Better" or "much better" | "Similar" | "Worse" |
|---|---|---|---|
| **Q1A (general: does HE make *people* expect better?)** | **22 / 28 (79%)** | 6 / 28 | **0 / 28** |
| **Q1B (personal: did *your* HE make *you* expect better?)** | **14 / 28 (50%)** | 9 / 28 | **5 / 28 (18%)** |

Nobody in the sample chose "much worse" on any item. But the more striking fact is directional: **not a single respondent said the general effect was negative, while five said their own was.** All five downward cases (5, 9, 14, 23, 27) answered **"d" (better)** on Q1A. They believe the credential works in the abstract and believe it will not work for them.

**Interpretation.** This is not inconsistency to be cleaned; it is the substantive finding. The general item is measuring a *cultural schema* — "education pays" — that almost everyone endorses because it is the available public vocabulary for talking about mobility. The personal item is measuring *position*: the respondent's assessment of their own trajectory given their debt, their labor market, their family's baseline. The dissociation is the classic structure of a norm that is hegemonic in the abstract and contested in application.

**Disconfirming evidence.** Three respondents chose "e" (much better) personally (3, 10, 18), and only one of them (10) also chose "e" generally. So the scale's optimistic endpoint is reachable personally but almost never generally — the opposite of what a "social desirability" reading would predict. That weakens a simple "people say the optimistic thing" explanation and strengthens the schema/position reading.

**What would break this.** If the five downward cases had been concentrated among low-education respondents, "dissociation" would really be a compositional artifact. They are not: they span some college (27), BA (5, 9, 14), and adult-returner BA (23). Age spans 26–42. The dissociation is not a subgroup effect in these data.

---

## Memo 2 — Mentorship is modal; opportunity structures are sufficient. Do not confuse the two.

**Pattern.** Two distinct mechanisms drive uplift, and they behave differently.

- **A1 Mentorship / relational sponsorship** — a person inside the institution who supported or sponsored the respondent. **13 / 23 substantive Q1 responses.** Attached to uplift in 12 of 13.
- **A2 Institutional opportunity structures** — internships, RA positions, study abroad, career centers, alumni networks, publishing. **7 / 23.** Attached to uplift in **7 of 7.**

**Interpretation.** Mentorship is the most *frequent* thing respondents mention, and frequency makes it look like the master mechanism. It is not the most *reliable* one. The single A1 case that is not uplift is ID 5: "some professors were great, but the career services were weak. I worry my financial situation will be worse than my parents' because of student loans." A supportive relationship was present and the expectation was still downward, because a financial mechanism (A3) overrode it. No A2 case has a countervailing mechanism attached; every respondent who named an internship, a career center, or an RA position landed on uplift without qualification (1, 3, 8, 10, 18, 20, 24).

**The mechanism reading.** Mentorship is *permeable to* debt, labor-market doubt, and family baseline; opportunity structures are, in these data, not. That is a hypothesis about causal sufficiency, not about frequency, and it is the kind of claim a theme list ("mentorship emerged as a theme") cannot make.

**Disconfirming evidence.** ID 5 does two things at once — it is the counterexample to A1's sufficiency and the only case where a respondent explicitly praises a professor *and* forecasts decline. ID 24 is the cleanest A2 case ("strong career center, got a good job") and carries no A1 at all, which means A2 is not simply a proxy for having a mentor.

**Caveat.** A2 is n=7 and all seven are uplift, so the association looks deterministic. With seven cases, one disconfirming case would change the claim qualitatively. Present it as "worth testing," not "established."

---

## Memo 3 — Debt does not dampen expectation; it forecloses it

**Pattern.** Financial burden (A3) appears in **4 / 23** substantive Q1 responses — IDs 5, 9, 14, 23 — and **all four are downward expectations (C4).** Zero A3 cases are uplift; zero are parity. Meanwhile A1 appears in 13 cases and produces uplift in 12.

**Interpretation.** The asymmetry is the point. Mentorship raises the *probability* of uplift and can be overridden. Debt, in this sample, appears to *rule out* uplift entirely. The two mechanisms are not opposite weights on one scale; they operate on different objects. A mentor changes what a respondent believes is *possible*; debt changes what a respondent believes is *available*.

This also explains why the four debt cases read so similarly despite different educational biographies. ID 5 (35, BA, mixed experience), ID 9 (26, BA, "professors were not very helpful"), ID 14 (27, BA, "unprepared for the job market"), and ID 23 (42, adult returner, "went back later in life") have almost nothing in common as *students*. What they share is that each narrates the credential as something purchased at a price that has not yet been repaid: "starting behind my parents who had no debt" (9); "because of student loans" (5); "inflation and loans" (14); "because of the debt I took on" (23). The comparison is not credential-to-credential, it is *balance sheet to balance sheet*.

**Disconfirming evidence.** None within the sample — which is itself the warning. n=4 with a perfect association is exactly the shape of result that evaporates in a larger sample. The correct memo language is: "In these data, debt is the only mechanism that never co-occurs with uplift. This is a hypothesis to carry forward, not a finding."

**Cross-check.** Debt co-occurs with credential skepticism once (23) and with inadequate preparation twice (5, 9). So A3 is not simply a proxy for B1 or B2; it appears in respondents who are otherwise unremarkable on those codes. ID 14 is the cleanest case: A3 alone, with a flat experience (A4) and a preparation complaint (B2) that several *upward* respondents also voiced.

---

## Memo 4 — Parity is an argument about the credential's causal status, licensed by parents who did fine without it

**Pattern.** The four substantive parity responses (4, 7, 13, 16) share two features, and the pairing is the finding.

**First, each is an argument about causation, not about outcome.** "Necessary but not a guarantee" (4); "the degree alone doesn't change much" (13's reasoning); "a mixed bag" (16); "I didn't finish, but the credits helped me get a promotion… they also worked their way up without degrees" (7). The claim is not *I will do badly* but *the credential is not the thing that produces the outcome*.

**Second, in each case the respondent's parents achieved a comparable position through a non-credential route.** ID 4: "they worked hard and did okay." ID 13: parents in the same income bracket as the degreed uncle she cites. ID 16: "they worked hard and we're middle class." ID 7: "they also worked their way up without degrees."

**Interpretation.** Stasis is produced by a natural comparison: if the people I am measuring myself against got here without the thing I am acquiring, the thing I am acquiring does not explain the destination. The parity respondents are not pessimistic and not confused — they are running a small causal inference and finding the treatment redundant. This is why B1 (credential skepticism, 4 cases) maps almost perfectly onto C3 (parity, 4 cases): 4, 13, 16 are both; 23 is the exception (B1 + C4) and is also the only B1 case carrying debt.

**Why this matters for the survey design.** A closed item with a "similar" option cannot distinguish *"I expect the same as my parents"* (an outcome forecast) from *"the credential is not what determines outcomes"* (a causal claim). The probes separate them, and they turn out to be nearly the same respondents.

**Disconfirming evidence — and it is instructive.** ID 17 is the mirror image: she also did not finish, also converted the partial credential into something (a small business), and reached **uplift** — because her comparison was "my parents worked for others." Same non-completion, same non-credential route, opposite valence. The difference is what the parents' route is taken to *mean*: self-made stability (→ parity) versus constrained labor (→ uplift). ID 27 is the third point: dropped out for finances, no conversion, downward. See Memo 5.

**Caveat.** All four parity respondents happen to have come from stable working- or middle-class families, and all four happen to be the respondents who also skipped or gave thin Q2 answers (4 and 16 skip; 7 is the inconsistent case; 13 is substantive but brief). Parity in this sample is not a *belief among the upwardly mobile* — it is a belief among the *already-arrived*, and it travels with low engagement with the instrument. That confound is not resolvable here and should be stated explicitly.

---

## Memo 5 — Non-completion is a trajectory, not a status

**Pattern.** Three respondents share the same objective educational status (B4: some college, no degree) and produce three different expectations:

| ID | Age | What the partial credential was converted into | Comparison | Q1B |
|---|---|---|---|---|
| 7 | 45 | Credits → promotion | Parents "worked their way up without degrees" | **c** (similar) |
| 17 | 29 | Skills → own small business | Parents "worked for others" | **d** (better) |
| 27 | 27 | Nothing — "dropped out because of finances" | "Fewer opportunities without a degree" | **b** (worse) |

**Interpretation.** The credential status is constant; what varies is (a) whether the partial credential was *converted* into a labor-market position, and (b) whether the parental comparison is read as a precedent (7: they did it, so this is normal) or as a contrast (17: they were constrained, so I am not). ID 27 has neither conversion nor a usable comparison, and lands downward by default — the only one of the three for whom the absence of a degree is narrated as *loss* rather than as *route*.

**Use in class.** This is the best eight-minute exercise in the dataset. Hand out the three verbatims with Q1B blanked. Students will code them differently; several will code 7 and 27 identically because both mention "didn't finish." The disagreement is the lesson: **the same code (B4) subsumes opposite trajectories, and only the surrounding text disambiguates.**

**Disconfirming evidence.** ID 23 is a fourth non-completer-adjacent case (adult returner, BA completed, but narrates the degree as a poor investment). He is downward and carries debt. He shows that "conversion" is not sufficient either — the balance sheet can override it, as in Memo 3.

---

## Memo 6 — The reference-group mechanism determines the direction, and normalization is the code that produces parity

**Pattern.** Q2's mechanism codes map onto Q2C almost perfectly (substantive n=21):

| Q2C | M1 Inspiration | M2 Cautionary | M3 Normalization |
|---|---|---|---|
| **e** (much better) | 4 | 0 | 0 |
| **d** (better) | 8 | 0 | 0 |
| **c** (similar) | **0** | 1 | **5** |
| **b** (worse) | 0 | 3 | 0 |

Three claims follow:

1. **Inspiration never produces parity** (0/12 M1 cases are "similar"). Every respondent who used a reference person as evidence of what is possible landed on uplift.
2. **Normalization always produces parity** (5/5 M3 cases are "similar"). Respondents who used a reference person as a gauge of what is *normal* — "a classmate with a similar degree is in a similar job" (11), "my uncle is in the same income bracket" (13), "my sister is in the same situation as our parents" (19), "we influence each other" (22), "my brother has a similar degree and lifestyle" (25) — landed on parity without exception.
3. **Cautionary tales mostly produce decline** (3/4 M2 cases are "worse"), with one exception: ID 2's cousin, who has a master's, is paying off loans, and works retail — read as a reason for *caution* (parity) rather than *decline*.

**Interpretation.** Reference groups do not exert a single "influence"; they are used for three different cognitive jobs. Inspiration supplies an existence proof. Caution supplies a warning. Normalization supplies a benchmark — and a benchmark, by construction, returns "same." This is why parity looks like indifference in the closed data and is actually a *comparative judgment* when you read the probes: the M3 respondents are not saying "I don't know," they are saying "I looked, and the comparison case is at my level."

**The critical caveat.** This cross-tab is close to tautological. Q2C asks "does this person's experience make you expect better/similar/worse?" and the probe asks what happened to that person. A respondent who says "she got a great job" and a respondent who says "she's in the same job as me" have effectively already answered Q2C in the probe. **The near-perfect association is an artifact of item construction, not a discovery.** The non-tautological finding is narrower and more useful: the *distribution of mechanism types* is uneven across reference categories (institutional mentors are M1 in 2/2; workplace and media references are never M1), and normalization is disproportionately attached to **peers and siblings** — the people whose outcomes are most comparable to the respondent's own.

**ID 7 as the limit case.** ID 7 selected siblings and relatives, named "my sister," answered Q2C = "similar," then wrote: *"No one really, I figured this out on my own."* The three closed items agree with each other and the probe denies all three. Two defensible rules — treat the probe as the truer indicator and recode Q2A/Q2B as "no one," or retain the closed answers and flag the case. At n=1 it changes no tabulation; the point is that the choice must be *documented*, and students will disagree about which rule to adopt. That disagreement is more instructive than the case.

---

## Memo 7 — The missingness is patterned, and it lands precisely on the respondents whose accounts the theory most needs

**Pattern.** Non-response in this instrument is not noise. It is concentrated.

**(a) Q1 differential non-response.** All five Q1_Probe non-respondents selected **"similar" (c)** on Q1B. Response rate on the probe: **100% among "better"/"much better" respondents (14/14), 100% among "worse" (5/5), and 44% among "similar" (4/9).** The people who expect parity are the people with least to say about why.

**(b) Q2 skip logic clusters with low engagement.** IDs 4 and 16 both chose Q1A = c, Q1B = c, and Q2A = e ("none of the above"). They are the same respondent type twice: neutral on the general claim, neutral on the personal claim, and no reference group. ID 23 is a third skip, but a different type — downward, debt-carrying, adult returner — and his "none" is not obviously an artifact. The skip category is internally heterogeneous, and treating the three skips as one analytic group would be a mistake.

**(c) The strongest version of the pattern.** Cross Q1A with missingness and something sharper appears. **The six respondents who rejected the general claim ("c" on Q1A: 4, 7, 11, 16, 22, 25) each produced at least one hole in the instrument:**

| ID | Q1A | Q1_Probe | Q2 status |
|---|---|---|---|
| 4 | c | substantive (B1, C3) | **skip** |
| 7 | c | substantive (B3, B4, C3) | **inconsistent** |
| 11 | c | **NR-token ("N/A")** | substantive |
| 16 | c | substantive (A4, B1, C3) | **skip** |
| 22 | c | **NR-blank ("")** | substantive |
| 25 | c | **NR-refusal** | substantive |

**Every general skeptic left at least one question effectively unanswered.** Only ID 7 gave both a substantive Q1 probe and a substantive Q2 probe — and his Q2 probe contradicts his Q2 closed answers.

**Interpretation.** Two readings, and they have opposite implications:

1. *Substantive:* people who doubt the "education pays" schema are less invested in the survey's frame and disengage from it. The non-response is a *consequence* of the belief.
2. *Instrumental:* the instrument's design — which presumes a comparative frame ("compared to your parents") and presumes a reference group — does not fit these respondents' situation, and they signal the misfit by declining. The non-response is *evidence about the instrument*.

Both readings converge on the same practical conclusion: **complete-case analysis on this dataset (n = 23 for Q1, n = 21 for Q2) silently deletes the six respondents whose position is theoretically most informative — the ones who think the credential is not causal.** Any memo claiming "skepticism produces parity" (Memo 4) is built on four cases out of six, and the two missing ones are missing *because* of the phenomenon being explained. That is a textbook non-ignorable missingness problem, and it is visible here only because the probes were kept alongside the closed items.

**Disconfirming evidence.** The association is not perfect in the other direction: IDs 2 and 19 said "better" generally (Q1A = d) and still failed to answer Q1_Probe. So general skepticism is sufficient for a hole, not necessary. The claim should be stated as: "skeptics are over-represented among non-respondents," not "non-response means skepticism."

---

## What these memos do not establish

1. **No causal claims.** Every memo above is an association in 21–23 cases of *simulated* data. The A2→uplift and A3→downward associations are perfect, which is the strongest possible signal that they should be treated as hypotheses rather than results.
2. **Single coder, no reliability estimate.** The A1/A2 boundary (does an alumni network that *introduces you to a mentor* count as A1 or A2?), the M1/M3 boundary ("doing really well" — existence proof or benchmark?), and the ID 7 inconsistency rule are all judgment calls. Each is a candidate for a two-coder exercise.
3. **The Q2 mechanism cross-tab (Memo 6) is partly tautological.** State this to students before they get excited about it. The non-tautological part is the *distribution of mechanism types across reference categories*.
4. **The missingness pattern is deliberately clean.** Real differential non-response is messier; the point of writing it cleanly is to make it visible at n=28. Do not let students infer realistic response rates from these data.
5. **Cohort confound in Memo 4.** All four parity respondents come from stable backgrounds and all four are low-engagement respondents. Parity-as-causal-argument and parity-as-low-investment cannot be separated here.