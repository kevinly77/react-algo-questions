import React from "react";
import { printCharacterArray } from "../../../helpers/helpers";

export default function ReverseWordsExample() {
	const message: string[] = "Reverse this sentence here".split("");
	function reverseWord(
		message: string[],
		startIndex: number,
		endIndex: number,
	) {
		while (startIndex < endIndex) {
			[message[startIndex], message[endIndex]] = [
				message[endIndex],
				message[startIndex],
			];
			startIndex++;
			endIndex--;
		}

		return message;
	}

	function reverseWords(message: string[]) {
		let reversedMessage = reverseWord(message, 0, message.length - 1);
		console.log(reversedMessage);
		let startingWordIndex = 0;
		for (let i = 0; i <= reversedMessage.length; i++) {
			if (reversedMessage[i] === " " || i === reversedMessage.length) {
				reverseWord(reversedMessage, startingWordIndex, i - 1);
				startingWordIndex = i + 1;
			}
		}

		return reversedMessage;
	}
	return (
		<div>
			<h2>Input: {printCharacterArray(message)}</h2>
			<h2>Output: {printCharacterArray(reverseWords(message))}</h2>
		</div>
	);
}
