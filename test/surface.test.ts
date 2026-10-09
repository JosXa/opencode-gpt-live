import { describe, expect, test } from "bun:test"

import { textInterval } from "../src/tui/surface"

describe("text frame interval", () => {
  test("animates at 30 fps directly in a terminal", () => {
    expect(textInterval({})).toBe(33)
  })

  test("slows to 10 fps inside tmux, screen, or zellij", () => {
    expect(textInterval({ TMUX: "/tmp/tmux-501/default,1535,0" })).toBe(100)
    expect(textInterval({ STY: "1234.pts-0.host" })).toBe(100)
    expect(textInterval({ ZELLIJ: "0" })).toBe(100)
  })
})
