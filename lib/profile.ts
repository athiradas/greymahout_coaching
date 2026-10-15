// Athira's facts, from her master profile. `profile.json` is generated in the
// profile repo (athiradas/profile, `npm run export -- greymahout <this repo>`),
// so don't edit it here. Only the wording around the facts belongs to this site.
import profile from "./profile.json"

export { profile }

/** "One-on-one coaching" → "One-on-one Coaching", the way this site sets titles. */
export function titleCase(s: string) {
  return s.replace(/(^|\s)(\S)/g, (_, space: string, letter: string) => space + letter.toUpperCase())
}

/** The YouTube video id in a watch URL. */
export function youtubeId(url: string) {
  return new URL(url).searchParams.get("v") ?? ""
}
