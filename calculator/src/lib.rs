use regex::Regex;
use rust_decimal::{Decimal, dec};
use wasm_bindgen::prelude::*;

fn add_thousand_separator(s: &str) -> String {
    let re_decimal = Regex::new(r"\.").unwrap();
    let is_decimal = re_decimal.is_match(s);

    let mut result = String::new();

    let mut i = 0;

    let d = re_decimal.split(s).collect::<Vec<&str>>();

    for c in d[0].chars().rev() {
        if i == 3 && d[0].find(c).unwrap() < d[0].len() - 1 {
            result.insert(0, ',');
            i = 0;
        }

        result.insert(0, c);
        i += 1;
    }

    if is_decimal {
        return format!("{}.{}", result, d[1]);
    }

    format!("{}", result)
}

fn remove_thousand_separator(s: &str) -> String {
    let mut result = String::new();

    for c in s.chars() {
        if c == ',' {
        } else {
            result.push(c);
        }
    }

    result
}

fn tokenize(input: &str) -> Vec<String> {
    let mut tokens: Vec<String> = Vec::new();
    let mut n = String::new();

    for i in 0..input.len() {
        if (input.chars().nth(i) == Some('-')
            || input.chars().nth(i) == Some('+')
            || input.chars().nth(i) == Some('x')
            || input.chars().nth(i) == Some('/'))
            && i != 0
        {
            tokens.push(n.clone());
            n.clear();
            tokens.push(format!("{}", input.chars().nth(i).unwrap()));
        } else {
            n.push(input.chars().nth(i).unwrap());
        }
    }

    tokens.push(n);

    tokens
}

#[wasm_bindgen]
pub fn add_character(c: &str, output: &str) -> String {
    let re_digit = Regex::new(r"[0-9]").unwrap();
    let mut result = String::new();

    if output == "0" && re_digit.is_match(c) {
        return format!("{}", c);
    }

    let re_symbol = Regex::new(r"[\.\+\-x\/]").unwrap();
    let re_symbol_last = Regex::new(r"[\.\+\-x\/]$").unwrap();
    if re_symbol.is_match(c) && re_symbol_last.is_match(output) {
        result += output;
        result.remove(result.len() - 1);
        result += c;
        return result;
    }

    if c == "." || c == "+" || c == "-" || c == "x" || c == "/" {
        return format!("{}{}", output, c);
    }

    let tokens: Vec<String> = tokenize(&format!("{}{}", output, c));

    for token in tokens {
        let n = remove_thousand_separator(&token);
        result += &add_thousand_separator(&n);
    }

    result
}

#[wasm_bindgen]
pub fn delete_character(input: &str) -> String {
    if input.len() == 1 {
        return String::from("0");
    }

    let last_char = input.chars().last().unwrap();

    if last_char == '.'
        || last_char == '+'
        || last_char == '-'
        || last_char == 'x'
        || last_char == '/'
    {
        return String::from(&input[0..input.len() - 1]);
    }

    let mut result = String::new();

    let v = tokenize(&input[0..input.len() - 1]);

    for token in v {
        let s = remove_thousand_separator(&token);
        result += &add_thousand_separator(&s);
    }

    result
}

#[wasm_bindgen]
pub fn calculate(input: &str) -> String {
    let mut v = tokenize(input);

    if v.len() == 1 {
        return format!("{}", v[0]);
    }

    while v.contains(&String::from("/")) {
        let i = v.iter().position(|x| x == "/").unwrap();

        if i + 1 <= v.len() - 1 {
            let a: Decimal = remove_thousand_separator(&v[i - 1]).parse().unwrap();
            let b: Decimal = remove_thousand_separator(&v[i + 1]).parse().unwrap();

            if b == dec!(0.0) {
                return String::from("Err");
            }

            v[i] = format!("{}", a / b);
            v.remove(i + 1);
            v.remove(i - 1);
        }
    }

    while v.contains(&String::from("x")) {
        let i = v.iter().position(|x| x == "x").unwrap();

        if i + 1 <= v.len() - 1 {
            let a: Decimal = remove_thousand_separator(&v[i - 1]).parse().unwrap();
            let b: Decimal = remove_thousand_separator(&v[i + 1]).parse().unwrap();

            v[i] = format!("{}", a * b);
            v.remove(i + 1);
            v.remove(i - 1);
        }
    }

    while v.contains(&String::from("-")) {
        let i = v.iter().position(|x| x == "-").unwrap();

        if i + 1 <= v.len() - 1 {
            let a: Decimal = remove_thousand_separator(&v[i - 1]).parse().unwrap();
            let b: Decimal = remove_thousand_separator(&v[i + 1]).parse().unwrap();

            v[i] = format!("{}", a - b);
            v.remove(i + 1);
            v.remove(i - 1);
        }
    }

    while v.contains(&String::from("+")) {
        let i = v.iter().position(|x| x == "+").unwrap();

        if i + 1 <= v.len() - 1 {
            let a: Decimal = remove_thousand_separator(&v[i - 1]).parse().unwrap();
            let b: Decimal = remove_thousand_separator(&v[i + 1]).parse().unwrap();

            v[i] = format!("{}", a + b);
            v.remove(i + 1);
            v.remove(i - 1);
        }
    }

    let result = add_thousand_separator(&v[0]);

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn add_thousand_separator_works() {
        assert_eq!(add_thousand_separator("123456789"), "123,456,789");
        assert_eq!(add_thousand_separator("12345678.9"), "12,345,678.9");
        assert_eq!(add_thousand_separator("1.00000000001"), "1.00000000001");
        assert_eq!(add_thousand_separator("0.123456789"), "0.123456789");
        assert_eq!(
            add_thousand_separator("9090909090.90909090"),
            "9,090,909,090.90909090"
        );
        assert_eq!(add_thousand_separator("1900"), "1,900");
        assert_eq!(
            add_thousand_separator("8123000123000123"),
            "8,123,000,123,000,123"
        );
    }

    #[test]
    fn remove_thousand_separator_works() {
        assert_eq!(remove_thousand_separator("123,456,789"), "123456789");
        assert_eq!(remove_thousand_separator("12,345,678.9"), "12345678.9");
        assert_eq!(remove_thousand_separator("1.00000000001"), "1.00000000001");
        assert_eq!(remove_thousand_separator("0.123456789"), "0.123456789");
        assert_eq!(
            remove_thousand_separator("9,090,909,090.90909090"),
            "9090909090.90909090"
        );
        assert_eq!(remove_thousand_separator("1,900"), "1900");
        assert_eq!(
            remove_thousand_separator("8,123,000,123,000,123"),
            "8123000123000123"
        );
    }

    #[test]
    fn tokenize_works() {
        assert_eq!(tokenize("1+1"), vec!["1", "+", "1"]);
        assert_eq!(tokenize("1,000,000.010101"), vec!["1,000,000.010101"]);
        assert_eq!(tokenize("1,000.5+1,000"), vec!["1,000.5", "+", "1,000"]);
        assert_eq!(tokenize("3.141592654"), vec!["3.141592654"]);
        assert_eq!(
            tokenize("1+2+3+4+5-6+7+8+9x0"),
            vec![
                "1", "+", "2", "+", "3", "+", "4", "+", "5", "-", "6", "+", "7", "+", "8", "+",
                "9", "x", "0"
            ]
        );
        assert_eq!(tokenize("-1123-1123"), vec!["-1123", "-", "1123"]);
    }

    #[test]
    fn add_character_works() {
        assert_eq!(add_character("1", "0"), "1");
        assert_eq!(add_character("0", "0"), "0");
        assert_eq!(add_character("0", "1."), "1.0");
        assert_eq!(add_character("+", "1"), "1+");
        assert_eq!(add_character("+", "0"), "0+");
        assert_eq!(add_character(".", "1"), "1.");
        assert_eq!(add_character(".", "0"), "0.");
        assert_eq!(add_character("0", "100"), "1,000");
        assert_eq!(add_character("8", "8,888,888"), "88,888,888");
        assert_eq!(
            add_character("8", "88,888,888+8,888,888"),
            "88,888,888+88,888,888"
        );
        assert_eq!(
            add_character("+", "88,888,888+88,888,888"),
            "88,888,888+88,888,888+"
        );
        assert_eq!(add_character("8", "1,234.567"), "1,234.5678");
    }

    #[test]
    fn delete_character_works() {
        assert_eq!(delete_character("0"), "0");
        assert_eq!(delete_character("1"), "0");
        assert_eq!(delete_character("1,000,000"), "100,000");
        assert_eq!(delete_character("10+10+"), "10+10");
        assert_eq!(delete_character("1,234.5678x1,234"), "1,234.5678x123");
        assert_eq!(
            delete_character("888+888-888x888/888"),
            "888+888-888x888/88"
        );
    }

    #[test]
    fn calculate_works() {
        assert_eq!(calculate("1+1-1x1/1"), "1");
        assert_eq!(calculate("2+2-2x2/2"), "2");
        assert_eq!(calculate("1,000+1,000+1,000"), "3,000");
        assert_eq!(calculate("0.1+0.2"), "0.3");
        assert_eq!(calculate("0.1-0.3"), "-0.2");
        assert_eq!(calculate("-0.1-0.3"), "-0.4");
        assert_eq!(calculate("-0.9-0.1"), "-1.0");
        assert_eq!(calculate("1/10"), "0.10");
    }
}
