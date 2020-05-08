import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useBoolean from "./useBoolean";

function setup(defaultVal = false) {
    const returnVal = [];

    function TmpComp() {
        Object.assign(returnVal, useBoolean(defaultVal));
        return null;
    }

    render(<TmpComp />);
    return returnVal;
}

describe("useBoolean tests", () => {
    it("should initialize useBoolean with false", () => {
        const [result] = setup();

        expect(result).toBeFalsy();
    });

    it("should initialize useBoolean with true", () => {
        const [result] = setup(true);

        expect(result).toBeTruthy();
    });

    it("should update result to false when 'off' is called", () => {
        const bool = setup(true);

        expect(bool[0]).toBeTruthy();
        // Act on 'off' call
        act(bool[1].off);
        // Value should be set to false
        expect(bool[0]).toBeFalsy();
    });

    it("should update result to true when 'on' is called", () => {
        const bool = setup();

        expect(bool[0]).toBeFalsy();
        // Act on 'on' call
        act(bool[1].on);
        // Value should be set to true
        expect(bool[0]).toBeTruthy();
    });

    it("should toggle value when 'toggle' is called", () => {
        const bool = setup();

        // Inially set to false
        expect(bool[0]).toBeFalsy();
        // Act on 'toggle' call
        act(bool[1].toggle);
        // Value should be set to true
        expect(bool[0]).toBeTruthy();

        // Act on 'toggle' call
        act(bool[1].toggle);
        // Value should be set to false
        expect(bool[0]).toBeFalsy();
    });
});
